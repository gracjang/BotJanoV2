using System;
using System.Collections.Generic;
using Jano.Domain.Exceptions;

namespace Jano.Domain.Models
{
  public class WorkLog
  {
    private ISet<WorkLogAttribute> _workLogAttributes = new HashSet<WorkLogAttribute>();

    public string IssueKey { get; protected set; }

    public string WorkStart { get; protected set; }

    public string AuthorUserKey { get; protected set; }

    public int? TimeSpent { get; protected set; }

    public string Comment { get; protected set; }

    public IEnumerable<WorkLogAttribute> WorkLogAttributes
    {
      get => _workLogAttributes;
      set => _workLogAttributes = new HashSet<WorkLogAttribute>(value);
    }

    protected WorkLog(
      string issueKey, string authorUserKey, int? timeSpent, string comment, WorkLogAttribute workLogAttribute)
    {
      SetIssueKey(issueKey);
      WorkStart = DateTime.Today.AddHours(9).ToString("yy-MM-dd");
      SetAuthorUserKey(authorUserKey);
      TimeSpent = timeSpent * Consts.SECONDS_TICK;
      Comment = comment;
      AddWorklogAttribute(workLogAttribute);
    }

    public void SetIssueKey(string issueKey)
    {
      if (string.IsNullOrEmpty(issueKey))
      {
        throw new DomainException(ErrorCode.InvalidWorklog, "IssueKey can't be empty");
      }

      if (IssueKey == issueKey)
      {
        return;
      }

      IssueKey = issueKey;
    }

    public void SetAuthorUserKey(string authorUserKey)
    {
      if (string.IsNullOrEmpty(authorUserKey))
      {
        throw new DomainException(ErrorCode.InvalidWorklog, "AuthorUserKey can't be empty");
      }

      if (AuthorUserKey == authorUserKey)
      {
        return;
      }

      AuthorUserKey = authorUserKey;
    }

    public void AddWorklogAttribute(WorkLogAttribute workLogAttribute)
    {
      _workLogAttributes.Add(workLogAttribute);
    }

    public static WorkLog Create(
      string issueKey, string authorUserKey, int? timeSpent, string comment, WorkLogAttribute workLogAttribute) 
        => new WorkLog(issueKey, authorUserKey, timeSpent, comment, workLogAttribute);
  }
}
