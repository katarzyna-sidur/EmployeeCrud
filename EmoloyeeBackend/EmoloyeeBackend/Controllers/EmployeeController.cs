using EmoloyeeBackend.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmoloyeeBackend.Controllers
{
    public class EmployeeController : ApiController
    {
        private IEmployeeService employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }

        [HttpGet]
        public IEnumerable<DBDataAccess.Employee> Get()
        {
            return employeeService.Get();
        }

        [HttpGet]
        public DBDataAccess.Employee Get(int id)
        {
            return employeeService.Get(id);
        }

        [HttpPost]
        public DBDataAccess.Employee Post(DBDataAccess.Employee employee)
        {
            return employeeService.Post(employee);
        }

        [HttpPut]
        public DBDataAccess.Employee Put(int id, DBDataAccess.Employee employee)
        {
            return employeeService.Put(id, employee);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            employeeService.Delete(id);
        }
    }
}
