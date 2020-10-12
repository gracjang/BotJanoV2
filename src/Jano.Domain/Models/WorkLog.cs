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
      string issueKey, string workStart, string authorUserKey, int? timeSpent, string comment, WorkLogAttribute workLogAttribute)
    {
      SetIssueKey(issueKey);
      SetWorkStart(workStart);
      SetAuthorUserKey(authorUserKey);
      SetTimeSpent(timeSpent);
      SetComment(comment);
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

    public void SetWorkStart(string workStart)
    {
      if (string.IsNullOrEmpty(workStart))
      {
        throw new DomainException(ErrorCode.InvalidWorklog, "WorkStart can't be empty");
      }

      if (WorkStart == workStart)
      {
        return;
      }

      WorkStart = workStart;
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

    public void SetTimeSpent(int? timeSpent)
    {
      if (TimeSpent == timeSpent)
      {
        return;
      }

      TimeSpent = timeSpent;
    }

    public void SetComment(string comment)
    {
      if (string.IsNullOrEmpty(comment))
      {
        throw new DomainException(ErrorCode.InvalidWorklog, "Comment can't be empty");
      }

      if (Comment == comment)
      {
        return;
      }

      Comment = comment;
    }

    public void AddWorklogAttribute(WorkLogAttribute workLogAttribute)
    {
      _workLogAttributes.Add(workLogAttribute);
    }

    public static WorkLog Create(
      string issueKey, string workStart, string authorUserKey, int? timeSpent, string comment, WorkLogAttribute workLogAttribute) 
        => new WorkLog(issueKey, workStart, authorUserKey, timeSpent, comment, workLogAttribute);
  }
}
