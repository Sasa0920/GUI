using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Collections.ObjectModel;
using MongoDB.Driver.Core.Events;

namespace Recipe_Management_App
{
    /// <summary>
    /// Interaction logic for MyRecipePage.xaml
    /// </summary>
    public partial class MyRecipePage : Page
    {
        private MongoDB_Connection _connection = new MongoDB_Connection();
        public ObservableCollection<Recipe> Recipes { get; set; }=new ObservableCollection<Recipe>();
        
        public MyRecipePage()
        {
            InitializeComponent();
            

            Recipes = new ObservableCollection<Recipe>
            {
                    new Recipe { Name = "Vegetable Soup", Preparation = "To make a hearty vegetable soup, onion, garlic, carrots, celery, potatoes, zucchini, green beans, tomatoes, broth, herbs, and bay leaf in olive oil. Season with salt and pepper. Bring to a boil, then simmer until tender. Add shredded cabbage, corn kernels, or bell pepper for flavor. Garnish with fresh herbs and serve hot with crusty bread." , Image="Images/soup.jpg"},
                    new Recipe { Name = "Tomato Pizza", Preparation = "To make a delicious tomato pizza, gather ingredients like pizza dough, tomato sauce, shredded mozzarella cheese, thinly sliced tomatoes, olive oil, oregano, basil, salt, pepper, and fresh basil leaves. Preheat oven to 475°F, roll dough, spread sauce, sprinkle cheese, arrange tomatoes, drizzle olive oil, season with oregano, basil, salt, and pepper. Bake for 10-15 minutes until golden and cheese is bubbly. Garnish with basil leaves." , Image="Images/Pizza.jpg"},
                    new Recipe { Name = "Cheesy Noodles", Preparation = "To make cheese noodles, combine 200 grams of noodles, butter, flour, milk, shredded cheddar, grated Parmesan cheese, salt, pepper, and nutmeg. Cook noodles until al dente, drain, and set aside. Melt butter, flour, milk, and cheese in a saucepan. Cook until thickened, then add shredded cheddar and Parmesan cheese. Season with salt, pepper, and nutmeg. Toss noodles with cheese sauce, serve hot. Enjoy the creamy, cheesy noodles." , Image="Images/noodles.jpg"},
                    new Recipe { Name = "Nasi Goreng", Preparation = "To make a delicious Nasi Goreng, combine rice, vegetable oil, onion, garlic, shrimp paste, chicken, eggs, soy sauce, sweet soy sauce, chili paste, mixed vegetables, salt, pepper, and green onions. Heat oil and sauté onions, garlic, chicken, tofu, eggs, rice, soy sauce, sweet soy sauce, and chili paste. Cook vegetables and season with salt and pepper. Serve hot, garnished with green onions and fried shallots. Enjoy your flavorful Nasi Goreng!" , Image="Images/nasigoreng.jpg"},
                    new Recipe { Name = "Roti", Preparation = "To make a soft and delicious roti, combine whole wheat flour, salt, oil, and warm water. Knead for 8-10 minutes, then let rest for 30 minutes. Divide dough into balls and roll into discs. Heat a tawa or griddle, cook rotis for 1-2 minutes on each side until golden brown. Brush with oil or ghee for extra flavor. Enjoy with your favorite curry or side dish.\r\n\r\n" , Image="Images/roti.jpg"},

            };      
            DataContext = this;
            LoadRecipes();
        }
        public async void LoadRecipes()
        {
            var recipescollections = await _connection.GetRecipesAsync();
            Recipes.Clear();
            foreach(var recipe in recipescollections)
            {
                Console.WriteLine($"Image URL : {recipe.Image}");
                Recipes.Add(recipe);
            }
        }
        private async void AddToFavourite_click(object sender, RoutedEventArgs e)
        {
            if(sender is Button button && button.DataContext is Recipe recipe)
            {
                await _connection.AddToFavourite_Async(recipe.Id);
                MessageBox.Show($"{recipe.Name} added successfully!");

                NavigationService?.Navigate(new FavouritesPage());
                    
            }

        }
        
        
    }
}
