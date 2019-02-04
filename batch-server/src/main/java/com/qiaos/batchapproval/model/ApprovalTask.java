package com.qiaos.batchapproval.model;


import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//@XmlRootElement
@Entity
public class ApprovalTask {
	public static final DateTimeFormatter formatter = DateTimeFormatter.ISO_ZONED_DATE_TIME;
	public static final ZoneId defaultZoneId = ZoneId.of("America/Chicago");
	
	public ApprovalTask() {
		super();
		this.createdTime = Instant.now();
	}
	public ApprovalTask(Long taskId, String taskName) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.createdTime = Instant.now();
	}
	@Override
	public String toString() {
		return "ApprovalTask [taskId=" + taskId + ", taskName=" + taskName
				+ ", createdBy=" + createdBy + ", taskOwner=" + taskOwner
				+ ", createdTime=" + formatter.format(ZonedDateTime.ofInstant(createdTime, defaultZoneId)) + "]";
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
	public Instant getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(Instant createdTime) {
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
	public String getFormattedCreatedTime() {
		return formatter.format(ZonedDateTime.ofInstant(createdTime, defaultZoneId));
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	private String taskName;
	private String createdBy;
	private String taskOwner;
	private Instant createdTime;
}
