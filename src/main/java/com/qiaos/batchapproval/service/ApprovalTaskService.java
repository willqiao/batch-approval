package com.qiaos.batchapproval.service;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qiaos.batchapproval.model.ApprovalTask;
import com.qiaos.batchapproval.rep.ApprovalTaskRepository;

@Service
public class ApprovalTaskService {
	@Autowired
	private ApprovalTaskRepository rep;
	
	public ApprovalTask getTask(Long id) {
		return rep.findById(id).orElse(null);
	}
	
	public Long createTask(ApprovalTask t) {
		return rep.save(t).getTaskId();
	}
	
	public ArrayList<ApprovalTask> getTasks() {
		ArrayList<ApprovalTask> list = new ArrayList<ApprovalTask>();
		Iterator<ApprovalTask> t = rep.findAll().iterator();
		while(t.hasNext()) {
			list.add(t.next());
		}
		return list;
	}

}
