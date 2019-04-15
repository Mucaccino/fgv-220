using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FVG_Core
{
    /// <summary>
    /// Classe base para livro
    /// </summary>
    public class Livro
    {
        /// <summary>
        /// Id do livro
        /// </summary>
        public short Id { get; set; }
        /// <summary>
        /// Título do livro
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Autor do livro
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// Edição do livro
        /// </summary>
        public string Edition { get; set; }
    }
}

