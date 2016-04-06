using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using KMMSEP.Domain.Models;

namespace KMMSEP.Infrastructure
{
    class ScheduleContext : MongoDbContext
    {
        public IMongoCollection<Schedule> Shedules { get; set; }
        public ScheduleContext():base()
        {
            Shedules = Database.GetCollection<Schedule>("Shedule");
        }
    }
}
