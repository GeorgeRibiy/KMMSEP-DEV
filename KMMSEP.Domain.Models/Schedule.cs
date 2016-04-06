using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;

namespace KMMSEP.Domain.Models
{
    public class Schedule
    {
        public Object Id { get; set; }
        public string Content { get; set; }
        public int Course { get; set; }
        public int Semester { get; set; }
    }
}
