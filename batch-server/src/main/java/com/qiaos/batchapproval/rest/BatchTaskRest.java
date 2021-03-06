package com.qiaos.batchapproval.rest;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.qiaos.batchapproval.model.ApprovalTask;
import com.qiaos.batchapproval.service.ApprovalTaskService;

@RestController
@CrossOrigin(origins="*", allowCredentials = "true", allowedHeaders = "*")
public class BatchTaskRest {
	@Autowired
	ApprovalTaskService service;
	
	@RequestMapping(path="/tasks", method=RequestMethod.GET)
	public ArrayList<ApprovalTask> getBatchTasks() {
		return service.getTasks();
	}
	
	@RequestMapping(path="/task/{id}", method=RequestMethod.GET)
	public @ResponseBody ApprovalTask getTask(@PathVariable Long id) {
		return service.getTask(id);		
	}
	
	@RequestMapping(path="/task", method=RequestMethod.POST)
	public Long createTask(@RequestBody ApprovalTask t) {
		//this is additional test comments.
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + t);
		return service.createTask(t);
	}
	
	@RequestMapping(path="/task/{id}", method=RequestMethod.PUT)
	public boolean updateTask(@PathVariable Long id) {
		return true;
	}
	
	@RequestMapping(path="/task/{id}", method=RequestMethod.DELETE)
	public void deleteTask(@PathVariable Long id) {
		
	}

}
