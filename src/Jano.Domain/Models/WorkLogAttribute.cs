using System;
using Jano.Domain.Exceptions;

namespace Jano.Domain.Models
{
  public class WorkLogAttribute
  {
    protected int AttrTypeId => Consts.WorkType;

    public string AttrValue { get; protected set; }

    protected WorkLogAttribute(string attrValue)
    {
      SetAttrValue(attrValue);
    }

    private void SetAttrValue(string attrValue)
    {
      if (string.IsNullOrEmpty(attrValue))
      {
        throw new DomainException(ErrorCode.InvalidWorklogAttribute, "AttrValue can't be empty");
      }

      AttrValue = attrValue;
    }

    public static WorkLogAttribute Create(string attrValue) => new WorkLogAttribute(attrValue);
  }
}
