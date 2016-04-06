using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KMMSEP.Domain.Models;
using MongoDB.Driver;

namespace KMMSEP.Infrastructure.IRepository
{
    interface IScheduleRepository
    {
        IMongoCollection<Schedule> GetAll();
        Schedule GetById(string id);
        Task<Schedule> GetByIdAsync(string id);
        void Add(Schedule entity);
        void Add(IEnumerable<Schedule> entities);
        void Update(Schedule entity);
        void Delete(Schedule entity);
        void Delete(IEnumerable<Schedule> entities);
        void Delete(string id);
    }
}
