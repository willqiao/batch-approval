package com.qiaos.batchapproval.model;


import java.sql.Timestamp;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class ApprovalTask {
	
	public ApprovalTask() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ApprovalTask(Long taskId, String taskName) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
	}
	@Override
	public String toString() {
		return "ApprovalTask [taskId=" + taskId + ", taskName=" + taskName
				+ ", createdBy=" + createdBy + ", taskOwner=" + taskOwner
				+ ", createdTime=" + createdTime + "]";
	}
	@Id @GeneratedValue
	private Long taskId;
	public Long getTaskId() {
		return taskId;
	}
	public String getTaskOwner() {
		return taskOwner;
	}
	public void setTaskOwner(String taskOwner) {
		this.taskOwner = taskOwner;
	}
	public LocalDateTime getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(LocalDateTime createdTime) {
		this.createdTime = createdTime;
	}
	public void setTaskId(Long taskId) {
		this.taskId = taskId;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	private String taskName;
	private String createdBy;
	private String taskOwner;
	private LocalDateTime createdTime;
}
