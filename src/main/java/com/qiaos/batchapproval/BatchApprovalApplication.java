package com.qiaos.batchapproval;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qiaos.batchapproval.config.BeanConfig;
import com.qiaos.batchapproval.model.ApprovalTask;


@SpringBootApplication
public class BatchApprovalApplication extends SpringBootServletInitializer implements WebApplicationInitializer {
	
	@RequestMapping(path="/hello", method=RequestMethod.GET)
	ApprovalTask hello(@RequestParam(name="first", defaultValue="will") String name) {
		AnnotationConfigApplicationContext t = new AnnotationConfigApplicationContext(BeanConfig.class);
		ApprovalTask g = t.getBean("greeting", ApprovalTask.class);
		g.setTaskId(1L);
		g.setTaskName("Will");
		g.setCreatedBy("test" + name);
		return g;
	}

	public static void main(String[] args) {
		SpringApplication.run(BatchApprovalApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return configureApplication(builder);
	}
	
	private static SpringApplicationBuilder configureApplication(SpringApplicationBuilder builder) {
		
		
		System.out.println("hellowrold");
		return builder.sources(BatchApprovalApplication.class).bannerMode(Banner.Mode.OFF);
	}
}
