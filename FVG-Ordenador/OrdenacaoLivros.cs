using FVG_Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Dynamic;
using System.Text;
using System.Threading.Tasks;

namespace FVG_Core
{
    /// <summary>
    /// Classe de métodos úteis ao projeto de livros
    /// </summary>
    public class OrdenacaoLivros
    {
        public OrdenacaoLivros(string jsonFileOrString = "inicial")
        {
            if (jsonFileOrString == "inicial") LoadJsonBooks("books.json"); // caso inicial carrega da base inicial
            else if (jsonFileOrString != null) LoadJsonBooks(jsonFileOrString); // caso não nulo carrega o parâmetro
        }

        /// <summary>
        /// Conjunto de livros armazenados
        /// </summary>
        public List<Livro> livros;

        /// <summary>
        /// Método auxiliar para converter ou carregar json com livros de entrada
        /// </summary>
        /// <param name="jsonFileOrString"></param>
        /// <returns></returns>
        public void LoadJsonBooks(string jsonFileOrString)        {
            // recupera dados de livros armazenados em arquivo .json
            string json = jsonFileOrString.IndexOf(".json") != -1 ? File.ReadAllText("books.json") : jsonFileOrString;
            // realiza o parseamento de dados armazenados para uma lista de classes
            this.livros = JsonConvert.DeserializeObject<List<Livro>>(json);
        }

        /// <summary>
        /// Ordena o conjunto de livros baseado em parâmetros de ordenação
        /// </summary>
        /// <param name="dynamicOrder">Parâmetros de ordenação</param>
        /// <returns>Conjunto de livros ordenado</returns>
        public List<Livro> OrderBooks(String dynamicOrder = null)
        {
            if (dynamicOrder == null || dynamicOrder == "") dynamicOrder = "id ASC"; // define ordenação padrão

            // caso entrada nula, retorna exceção customizada
            if (this.livros == null) throw new OrdenacaoException("O conjunto de livros não pode ser nulo.");

            // caso entrada vazia, retorna conjunto vazio
            else if (!livros.Any()) return livros;

            // utilizando https://www.nuget.org/packages/System.Linq.Dynamic/ 
            // para ordenação dinâmica baseada em entrada por string p
            List<Livro> sortedBooks = livros.AsQueryable().OrderBy(dynamicOrder).ToList();

            return this.livros = sortedBooks;
        }

        /// <summary>
        /// Ordena o conjunto de livros baseado em parâmetros de ordenação
        /// </summary>
        /// <param name="livros">Conjunto de livros</param>
        /// <param name="dynamicOrder">Parâmetros de ordenação</param>
        /// <returns>Conjunto de livros ordenado</returns>
        public List<Livro> OrderBooks(List<Livro> livros, String dynamicOrder = null)
        {
            this.livros = livros;
            return OrderBooks(dynamicOrder);
        }

        /// <summary>
        /// Ordena o conjunto de livros retornando em string legível
        /// </summary>
        /// <param name="dynamicOrder">Parâmetros de ordenação</param>
        /// <returns>String legível de livros ordenados</returns>
        public string OrderBooksToVerbose(String dynamicOrder = null)
        {
            // caso seja solicitado, reordena conjunto enviado
            if (dynamicOrder != null) livros = this.OrderBooks(dynamicOrder);
            // caso vazio retorna (conjunto vazio)
            if (!this.livros.Any()) return "(conjunto vazio)";
            string v = "Livros";
            foreach (var livro in livros)
            {
                v += string.Concat(" ", livro.Id.ToString(), ",");
            }
            return v.Substring(0, v.Length - 1);
        }

        /// <summary>
        /// Ordena o conjunto de livros retornando em string legível
        /// </summary>
        /// <param name="livros">Coleção de livros</param>
        /// <param name="dynamicOrder">Parâmetros de ordenação</param>
        /// <returns>String legível de livros ordenados</returns>
        public string OrderBooksToVerbose(List<Livro> livros, String dynamicOrder = null)
        {
            this.livros = livros;
            return OrderBooksToVerbose(dynamicOrder);
        }
    }
}
