package com.qiaos.batchapproval;

import java.sql.Timestamp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.qiaos.batchapproval.model.ApprovalTask;
import com.qiaos.batchapproval.rep.ApprovalTaskRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BatchApprovalApplicationTests {
	@Autowired
	ApprovalTaskRepository rep;

	@Test
	public void testContextLoads() {
		System.out.println(rep.findAll());
		ApprovalTask tt = new ApprovalTask();
		tt.setTaskName("ffffff");
		tt.setTaskOwner("will");
		tt.setCreatedBy("aaaaaa");
		tt.setCreatedTime(new Timestamp(System.currentTimeMillis()));
		rep.save(tt);
	}

}
