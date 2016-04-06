using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace KMMSEP.Infrastructure
{
    public class MongoDbContext
    {
        public MongoClient Client { get; set; }
        public MongoServerAddress ServerAddress { get; set; }
        public IMongoDatabase Database { get; set; }
        public MongoDbContext()
        {
            Client = new MongoClient();
            ServerAddress = Client.Settings.Server;
            Database = Client.GetDatabase("KMMSEPdb");
        }
    }
}
