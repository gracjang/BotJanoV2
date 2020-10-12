using System;

namespace Jano.Domain.Exceptions
{
  public class BaseException : Exception
  {
    public string Code { get; }

    protected BaseException() { }

    public BaseException(string code)
    {
      Code = code;
    }

    protected BaseException(string message, params object [] args) 
    : this(string.Empty, message, args) { }

    protected BaseException(string code, string message, params object [] args) 
    : this(null, code, message, args) { }

    protected BaseException(Exception innerException, string message, params object [] args) 
    : this(innerException, string.Empty, message, args) { }

    protected BaseException(Exception innerException, string code, string message, params object [] args) 
    : base(string.Format(message, args), innerException)
    {
      Code = code;
    }

  }
}
