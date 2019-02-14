package com.qiaos.batchapproval.service;

import java.util.ArrayList;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
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
	
//	@Cacheable("tests")
	public ArrayList<ApprovalTask> getTasks() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		ArrayList<ApprovalTask> list = new ArrayList<ApprovalTask>();
		Iterator<ApprovalTask> t = rep.findAll().iterator();
		while(t.hasNext()) {
			list.add(t.next());
		}
		return list;
	}

}
