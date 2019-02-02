package com.qiaos.batchapproval.rep;

import org.springframework.data.repository.CrudRepository;

import com.qiaos.batchapproval.model.BatchUser;

public interface BatchUserRepository extends CrudRepository<BatchUser, Integer>{
	
	public BatchUser findByUsername(String username);
}
