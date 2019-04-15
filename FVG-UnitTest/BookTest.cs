using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FVG_Core;
using System.Linq;

namespace FVG_Test
{

    [TestClass]
    public class BookTest
    {
        private readonly OrdenacaoLivros _ol;

        public BookTest()
        {
            // popula base de testes com arquivo .json
            _ol = new OrdenacaoLivros();
        }

        [TestMethod]
        public void TestMethod1()
        {
            // ordena conjunto Título ascendente
            var bsv = _ol.OrderBooksToVerbose("title ASC");

            Assert.AreEqual(bsv, "Livros 3, 4, 1, 2");
        }

        [TestMethod]
        public void TestMethod2()
        {
            // ordena conjunto Autor ascendente, Título descendente
            var bsv = _ol.OrderBooksToVerbose( "author ASC, title DESC");

            Assert.AreEqual(bsv, "Livros 1, 4, 3, 2");
        }

        [TestMethod]
        public void TestMethod3()
        {
            // ordena conjunto Edição descendente, Autor descendente, Título	ascendente
            var bsv = _ol.OrderBooksToVerbose( "edition DESC, author DESC, title ASC");

            Assert.AreEqual(bsv, "Livros 4, 1, 3, 2");
        }

        [TestMethod]
        public void TestMethod4()
        {
            Exception expectedExcetpion = null;

            try
            {
                // monta conjunto nulo
                var bsv = _ol.OrderBooksToVerbose(null, null);
            }
            catch (Exception ex)
            {
                expectedExcetpion = ex;
            }

            Assert.IsNotNull(expectedExcetpion);
        }

        [TestMethod]
        public void TestMethod5()
        {
            // monta conjunto vazio
            var bsv = _ol.OrderBooksToVerbose(new List<Livro> { }, "edition DESC, author DESC, title ASC");

            Assert.AreEqual(bsv, "(conjunto vazio)");
        }
    }
}
