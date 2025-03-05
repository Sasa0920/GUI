using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Recipe_Management_App
{
    public class RecipeCommand: ICommand
    {
        private readonly Action<object> _execute;
        private readonly Predicate<object> _executePredicate;

        public RecipeCommand(Action<object> execute, Predicate<object> executePredicate=null)
        {
            _execute = execute ?? throw new ArgumentNullException(nameof(execute));
            _executePredicate = executePredicate;
        }

        public bool CanExecute(object parameter)
        {
            return _executePredicate==null|| _executePredicate(parameter);
        }
        public void Execute(object parameter)
        {
            _execute(parameter);
        }
        public event EventHandler CanExecuteChanged
        {
            add
            {
                CommandManager.RequerySuggested += value;
            }
            remove
            {
                CommandManager.RequerySuggested -= value;
            }
        }
    }
}
