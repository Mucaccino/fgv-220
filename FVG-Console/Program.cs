using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FVG_Core;

namespace FVG_Console
{
    class Program
    {
        static void Main(string[] args)
        {
            OrdenacaoLivros ol = new OrdenacaoLivros();

            Console.WriteLine("default:");

            foreach (var book in ol.livros)
            {
                Console.WriteLine("{0} {1} {2} {3}", book.Id.ToString(), book.Title, book.Author, book.Edition);
            }
            Console.WriteLine(ol.OrderBooksToVerbose());

            ol.OrderBooks("title ASC");
            Console.WriteLine("\ntitle ASC:");

            foreach (var book in ol.livros)
            {
                Console.WriteLine("{0} {1} {2} {3}", book.Id.ToString(), book.Title, book.Author, book.Edition);
            }
            Console.WriteLine(ol.OrderBooksToVerbose());

            ol.OrderBooks("author ASC, title DESC");
            Console.WriteLine("\nauthor ASC, title DESC:");

            foreach (var book in ol.livros)
            {
                Console.WriteLine("{0} {1} {2} {3}", book.Id.ToString(), book.Title, book.Author, book.Edition);
            }
            Console.WriteLine(ol.OrderBooksToVerbose());

            ol.OrderBooks( "edition DESC, author DESC, title ASC");
            Console.WriteLine("\nedition DESC, author DESC, title ASC:");

            foreach (var book in ol.livros)
            {
                Console.WriteLine("{0} {1} {2} {3}", book.Id.ToString(), book.Title, book.Author, book.Edition);
            }
            Console.WriteLine(ol.OrderBooksToVerbose());

            ol.livros = new List<Livro> { };
            ol.OrderBooks();
            Console.WriteLine("\nConjunto vazio:");

            foreach (var book in ol.livros)
            {
                Console.WriteLine("{0} {1} {2} {3}", book.Id.ToString(), book.Title, book.Author, book.Edition);
            }
            Console.WriteLine(ol.OrderBooksToVerbose());

            Console.WriteLine("\nAperte qualquer tecla para enviar conjunto nulo:");
            Console.ReadKey();

            // throw exception
            ol.livros = null;
            ol.OrderBooks("nulo");

        }
    }
}



/*
 * 
 * namespace SortLists
{

  class ListUser
  {
    public int id { get; set; }
    public string firstname { get; set; }
    public string lastname { get; set; }
    public string company { get; set; }
    public string phonenumber { get; set; }
  }

  class Program
  {
     static void Main(string[] args)
     {
        var user1 = new ListUser() { id = 1, firstname = "James", lastname = "Smith", company = "Code Logic", phonenumber = "01235 566 456" };
        var user2 = new ListUser() { id = 1, firstname = "Chris", lastname = "Andrews", company = "Adobe", phonenumber = "01235 566 456" };
        var user3 = new ListUser() { id = 1, firstname = "Paul", lastname = "Jones", company = "Microsoft", phonenumber = "01235 566 456" };
        var user4 = new ListUser() { id = 1, firstname = "Peter", lastname = "Williams", company = "Apple", phonenumber = "01235 566 456" };

        List<ListUser> users = new List<ListUser>()
        {
            user1, user2, user3, user4
        };
    }
  }
 */
