using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Recipe_Management_App
{
    public class MongoDB_Connection
    {
        private const string Connection = "mongodb+srv://sasanthi:Sasanthi0920@cluster0.860ue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;
        private IMongoCollection<Recipe> _recipes;

        public MongoDB_Connection()
        {
            var client = new MongoClient(Connection);
            var database = client.GetDatabase("gui");
            _recipes = database.GetCollection<Recipe>("recipes");
        }
        public async Task<List<Recipe>> GetRecipesAsync()
        {
            return await _recipes.Find(new BsonDocument()).Limit(5).ToListAsync();


        }
        public async Task<List<Recipe>> GetFavourteAsync()
        {
            var filter = Builders<Recipe>.Filter.Eq(r => r.IsFavourite, true);
            return await _recipes.Find(filter).ToListAsync();
        }
        public async Task AddToFavourite_Async(int RecipeId)
        {
            
            var filter = Builders<Recipe>.Filter.Eq(r => r.Id, RecipeId);
            var update = Builders<Recipe>.Update.Set(r => r.IsFavourite, true);
            await _recipes.UpdateOneAsync(filter, update);
        }
        public async Task Delete_Async(int RecipeId)
        {
            
            var filter=Builders<Recipe>.Filter.Eq(r=>r.Id, RecipeId);
            var update = Builders<Recipe>.Update.Set(r=>r.IsFavourite, false);
            await _recipes.UpdateOneAsync(filter,update);
        }
    }
}
