using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DBDataAccess;
using EmoloyeeBackend.Interfaces;

namespace EmoloyeeBackend.Services
{
    public class EmployeeService: IEmployeeService
    {
        public IEnumerable<DBDataAccess.Employee> Get()
        {
            using(EmployeesDBEntities entities = new EmployeesDBEntities())
            {
                return entities.Employee.ToList();
            }
        }

        public DBDataAccess.Employee Get(int id)
        {
            using(EmployeesDBEntities entities = new EmployeesDBEntities())
            {
                var entity = entities.Employee.FirstOrDefault(e => e.Id == id);

                if(entity == null)
                {
                    throw new Exception("Not found");
                }

                return entity;
            }
        }

        public DBDataAccess.Employee Post(DBDataAccess.Employee employee)
        {
            try
            {
                using (EmployeesDBEntities entities = new EmployeesDBEntities())
                {
                    var result = entities.Employee.Add(employee);
                    entities.SaveChanges();

                        return result;
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Error cannot add this employee", ex);
            }
        }

        public DBDataAccess.Employee Put(int id,  DBDataAccess.Employee employee)
        {
            try
            {
                using (EmployeesDBEntities entities = new EmployeesDBEntities())
                {
                    var entity = entities.Employee.FirstOrDefault(e => e.Id == id);

                    if(entity == null)
                    {
                        throw new Exception("Cannot update");
                    }

                    entities.Entry(entity).CurrentValues.SetValues(employee);
                    entities.SaveChanges();
                    return entities.Entry(entity).Entity;
                }
            }
            catch(Exception ex)
            {
                throw new Exception("Error ccannnot update this employee", ex);
            }
        }

        public void Delete (int id)
        {
            try
            {
                using (EmployeesDBEntities entities = new EmployeesDBEntities())
                {
                    var entity = entities.Employee.FirstOrDefault(e => e.Id == id);

                    if (entity == null)
                    {
                        throw new Exception("Cannot delete");
                    }

                    entities.Employee.Remove(entity);
                    entities.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error cannot delete this employee", ex);
            }
        }
    }
}