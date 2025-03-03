using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Recipe_Management_App
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class TasteBook : Window
    {
        public TasteBook()
        {
            InitializeComponent();
            ContentFrame.Navigate(new HomePage());
        }
        private void HomeButton(object sender, RoutedEventArgs e)
        {
            ContentFrame.Navigate(new HomePage());
        }
        private void CreateRecipeButton(object sender, RoutedEventArgs e)
        {
            ContentFrame.Navigate(new CreateRecipePage());
        }
        private void MyRecipeButton(object sender, RoutedEventArgs e)
        {
            ContentFrame.Navigate(new MyRecipePage());
        }
        private void FavouritesButton(object sender, RoutedEventArgs e)
        {
            ContentFrame.Navigate(new FavouritesPage());
        }
        private void GetStartedButton(object sender, RoutedEventArgs e)
        {
            ContentFrame.Navigate(new GetStartedPage());
        }
    }
}