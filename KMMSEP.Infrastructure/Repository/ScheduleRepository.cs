using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using KMMSEP.Domain.Models;
using KMMSEP.Infrastructure.IRepository;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace KMMSEP.Infrastructure.Repository
{
    class ScheduleRepository : IScheduleRepository
    {
        public ScheduleContext Context { get; }
        public IMongoCollection<Schedule> GetAll()
        {
            return Context.Database.GetCollection<Schedule>("Schedule", new MongoCollectionSettings());
        }

        public Schedule GetById(string id)
        {
            return Context.Shedules.AsQueryable().FirstOrDefault(s => s.Id.ToString() == id.ToString());
        }

        public Task<Schedule> GetByIdAsync(string id)
        {
            return Context.Shedules.AsQueryable().FirstOrDefaultAsync(w => w.Id.ToString() == id);
        }

        public void Add(Schedule entity)
        {
            Context.Shedules.InsertOne(entity);
        }

        public void Add(IEnumerable<Schedule> entities)
        {
            Context.Shedules.InsertMany(entities);
        }

        public void Update(Schedule entity)
        {
            var filter = Builders<Schedule>.Filter.Eq("Id", entity.Id.ToString());
            var update = Builders<Schedule>.Update.Set("Schedule", entity);
            Context.Shedules.UpdateOne(filter, update);
        }

        public void Delete(Schedule entity)
        {
            Context.Shedules.DeleteOne(e => e == entity);
        }

        public void Delete(IEnumerable<Schedule> entities)
        {
            foreach (var entity in entities)
            {
                var deleteResult = Context.Shedules.DeleteOne(e => e.Id.ToString() == entity.Id.ToString());
            }
        }

        public void Delete(string id)
        {
            Context.Shedules.DeleteOne(e => e.Id.ToString() == id);
        }
    }
}
