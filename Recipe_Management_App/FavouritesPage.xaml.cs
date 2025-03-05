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
using System.ComponentModel;
using Recipe_Management_App;

namespace Recipe_Management_App
{
    /// <summary>
    /// Interaction logic for FavouritesPage.xaml
    /// </summary>
    public partial class FavouritesPage : Page,INotifyPropertyChanged
    {
        private readonly MongoDB_Connection _connection = new MongoDB_Connection();
        
        private ObservableCollection<Recipe> favorites;

        public ObservableCollection<Recipe> Favourites
        {
            get { return favorites; }
            set
            {
                favorites = value;
                OnPropertyChanged(nameof(Favourites));
            }
        }

        public ICommand DeleteCommand { get; }

        public FavouritesPage()
        {
            InitializeComponent();
            DataContext = this;

            Favourites = new ObservableCollection<Recipe>();
            DeleteCommand = new RecipeCommand(Delete_click);

            LoadFavourites();
        }
        private async void LoadFavourites()
        {
           
            var favourite = await _connection.GetFavourteAsync();

            if(favourite == null || !favourite.Any())
            {
                Console.WriteLine("No favourite recipes found");
                return;
            }
            Console.WriteLine($"Fetched {favourite.Count} favourites");
            Application.Current.Dispatcher.Invoke(() =>
            {
                Favourites.Clear();
                foreach (var recipe in favourite)
                {
                    Console.WriteLine($"{recipe.Name} (ID : {recipe.Id})");
                    Favourites.Add(recipe);
                }
            });
        }
        private async void Delete_click(object index)
        {
           if(index is int recipeID)
            {
                await _connection.Delete_Async(recipeID);
                var Removed = Favourites.FirstOrDefault(r=>r.Id == recipeID);
                if(Removed != null)
                {
                    Favourites.Remove(Removed);
                }
                LoadFavourites();
            }
        }
        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string property_name)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(property_name));
        }
    }
}
