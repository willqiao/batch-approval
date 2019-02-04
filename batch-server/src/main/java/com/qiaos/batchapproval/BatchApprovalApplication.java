package com.qiaos.batchapproval;

import java.util.Arrays;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qiaos.batchapproval.model.ApprovalTask;


@SpringBootApplication
@RestController
@EnableCaching
public class BatchApprovalApplication extends SpringBootServletInitializer implements WebApplicationInitializer {
	@Autowired
	private ConfigurableApplicationContext applicationContext;
	
	@Value("${myqueue.name}")
	private String queueName;
	
	@RequestMapping(path="/hello", method=RequestMethod.GET )//, produces = "application/json"
	public ApprovalTask hello(@RequestParam(name="first", defaultValue="will") String name) {
		System.out.println("greeting api get..." + this.queueName);
//		AnnotationConfigApplicationContext t = new AnnotationConfigApplicationContext(BeanConfig.class);
		ApprovalTask g = applicationContext.getBean("greeting", ApprovalTask.class);
		g.setTaskId(1L);
		g.setTaskName("Will");
		g.setCreatedBy("test" + name);
		return g;
	}
	
	@Bean
	public InitializingBean initData () {
		return ()-> System.out.println("hello world");
	}

	public static void main(String[] args) {
		SpringApplication.run(BatchApprovalApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner command() {
		return x -> {
			System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			Arrays.asList(x).forEach(arg->System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@"+arg));
			};
	}
	
}
