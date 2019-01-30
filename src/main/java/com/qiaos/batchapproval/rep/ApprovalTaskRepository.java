package com.qiaos.batchapproval.rep;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;

import com.qiaos.batchapproval.model.ApprovalTask;
@Repository
public interface ApprovalTaskRepository extends CrudRepository<ApprovalTask, Long> {

}
