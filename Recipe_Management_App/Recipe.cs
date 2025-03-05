using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace Recipe_Management_App
{
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] 
        public ObjectId MongoId { get; set; }

        [BsonElement("id")]

        public int Id { get; set; }
        [BsonElement("name")]
        public string? Name { get; set; }
        [BsonElement("image")]
        public string? Image { get; set; }
        [BsonElement("ingredients")]
        public string? Ingredients { get; set; }
        [BsonElement("instructions")]
        public string? Preparation { get; set; }
        [BsonElement("favourite")]
        [BsonIgnoreIfDefault(false)]
        public bool IsFavourite { get; set; }

        
    }
}
