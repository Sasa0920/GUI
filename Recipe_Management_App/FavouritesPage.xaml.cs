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

namespace Recipe_Management_App
{
    /// <summary>
    /// Interaction logic for FavouritesPage.xaml
    /// </summary>
    public partial class FavouritesPage : Page
    {
        private MongoDB_Connection _connection = new MongoDB_Connection();
        public ObservableCollection<Recipe> Favourites { get; set; } = new ObservableCollection<Recipe>();
        public FavouritesPage()
        {
            InitializeComponent();
            DataContext = this;
            LoadFavourites();
        }
        private async void LoadFavourites()
        {
            var favourite = await _connection.GetFavourteAsync();
            Favourites.Clear();
            foreach(var recipe in favourite)
            {
                Favourites.Add(recipe);
            }
        }
        private async void Delete_click(object sender, RoutedEventArgs e)
        {
            if(sender is Button button && button.DataContext is Recipe recipe)
            {
                await _connection.Delete_Async(recipe.Id);
                MessageBox.Show($"{recipe.Name} removed successfully");
                LoadFavourites();
            }
        }
    }
}
