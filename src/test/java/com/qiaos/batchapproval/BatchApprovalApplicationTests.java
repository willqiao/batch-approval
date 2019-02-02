package com.qiaos.batchapproval;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.time.Instant;
import java.util.concurrent.CountDownLatch;
import java.util.logging.Logger;
import java.util.stream.Stream;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.concurrent.ListenableFuture;

import com.qiaos.batchapproval.model.ApprovalTask;
import com.qiaos.batchapproval.model.BatchUser;
import com.qiaos.batchapproval.rep.ApprovalTaskRepository;
import com.qiaos.batchapproval.rep.BatchUserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BatchApprovalApplicationTests {
	@Autowired
	ApprovalTaskRepository rep;
	
	@Autowired
	BatchUserRepository userRepo;
	final static CountDownLatch startSignal = new CountDownLatch(1000);
	@Autowired
    private KafkaTemplate<String, String> template;

	@Test
	public void testContextLoads() {
//		System.out.println(rep.findAll());
//		ApprovalTask tt = new ApprovalTask();
//		tt.setTaskName("ffffff");
//		tt.setTaskOwner("will");
//		tt.setCreatedBy("aaaaaa");
//		tt.setCreatedTime(Instant.now());
//		rep.save(tt);
		
		System.out.println(BatchUser.encoder.encode("password"));
		assertTrue(BatchUser.encoder.matches("password", "$2a$10$87H25orIdKYGQBFR0DyEXe95hntj2qsrTOTQhxr8BS8UZu3rMJFxu"));
		userRepo.deleteAll();
		
		userRepo.save(new BatchUser("will", "password", "user"));
		userRepo.save(new BatchUser("root", "root", "admin"));
		userRepo.save(new BatchUser("admin", "admin", "admin"));
		
		assertNotNull(userRepo.findByUsername("will"));
	}
	
	@Test
	public void testFindAll() {
		rep.findByCreatedTimeAfter(Instant.parse("2019-01-31T20:15:30.00Z")).forEach(t-> System.out.println(t));
	}
	
	@Test
	public void testSendMsg() {
		ListenableFuture<SendResult<String, String>> result = template.send("test", "this is my msg2.....");
		Stream.iterate(0, x->x+1).limit(1000).parallel().forEach(i -> template.send("test", Thread.currentThread().getName() + " msg "+i));
		
		result.addCallback(sendResult -> System.out.println(sendResult.getProducerRecord()), ex->ex.printStackTrace());
		
		Logger.getGlobal().info("this is my test");
		assertTrue(true);
		try {
			startSignal.await();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println(startSignal.getCount());
	}
	
	@KafkaListener(topics = "test")
    public void listen(ConsumerRecord<?, ?> cr) throws Exception {
		System.out.println("--------------------------------");
		Logger.getGlobal().info(cr.toString());
		startSignal.countDown();
    }

}
