using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmoloyeeBackend.Interfaces
{
    public interface IEmployeeService
    {
        IEnumerable<DBDataAccess.Employee> Get();
        DBDataAccess.Employee Get(int id);
        DBDataAccess.Employee Post(DBDataAccess.Employee employee);
        DBDataAccess.Employee Put(int id, DBDataAccess.Employee employee);
        void Delete(int id);
    }
}
