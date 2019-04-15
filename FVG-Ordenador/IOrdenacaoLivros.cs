using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FVG_Core
{
    interface IOrdenacaoLivros
    {
        // Carrega livros
        void LoadJsonBooks(string jsonFileOrString);

        // Ordena os livros
        List<Livro> OrderBooks(List<Livro> books, String dynamicOrder);


    }
}
