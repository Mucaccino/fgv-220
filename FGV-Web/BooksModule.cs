using Nancy;
using Nancy.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FVG_Core;
using Nancy.ModelBinding;

namespace FGV_Web
{
    public class BooksModule : NancyModule
    {
        public BooksModule()
        {
            Get["/api/"] = param => "Hello Books World!";

            Post["/api/ordenacao"] = param =>
            {
                var body = this.Bind<BodyBooks>();

                // instancia serviço de ordenação
                OrdenacaoLivros ol = new OrdenacaoLivros(body.livros);
                // recupera ordenação, e executa ordenação
                List<Livro> livros = ol.OrderBooks(body.ordenacao);
                // retorna a coleção como json
                return Response.AsJson(livros);
            };
        }
    }

    public class BodyBooks
    {
        public string livros { get; set; }
        public string ordenacao { get; set; }
    }
}
