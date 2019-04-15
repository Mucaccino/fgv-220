using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FVG_Core
{ 
    public class OrdenacaoException:Exception
    {
        public OrdenacaoException()
        {
        }

        public OrdenacaoException(string message)
            : base(message)
        {
        }

        public OrdenacaoException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}
