package com.qiaos.batchapproval.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.qiaos.batchapproval.model.ApprovalTask;

@Configuration
public class BeanConfig {
	
	@Bean
	public ApprovalTask greeting() {
		ApprovalTask g = new ApprovalTask();
		return g;
	}

}
