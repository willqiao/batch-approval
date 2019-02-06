package com.qiaos.batchapproval;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.qiaos.batchapproval.model.BatchUser;
import com.qiaos.batchapproval.rep.BatchUserRepository;

@Configuration
public class BatchApprovalSecurityConfiguration {//extends WebSecurityConfigurerAdapter {
//	
//	@Autowired
//	private BatchUserRepository userRepo;
//	
//	@Bean
//	public CorsFilter corsFilter() {
//	   UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	   CorsConfiguration config = new CorsConfiguration();
//	   config.setAllowCredentials(true);
//	   config.addAllowedOrigin("*");
//	   config.addAllowedHeader("*");
//	   config.addAllowedMethod("GET,POST");
//	   config.applyPermitDefaultValues();
//	   source.registerCorsConfiguration("/**", config);
//	   return new CorsFilter(source);
//	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!configure http");
//		http.cors().and().csrf().disable();
////		http.addFilter(corsFilter());
////		.authorizeRequests().antMatchers("/**").permitAll()
////		.antMatchers("/repo/**").authenticated().and().formLogin().and().logout()
//	}
//
////	@Override
////	public UserDetailsService userDetailsServiceBean() throws Exception {
////		// TODO Auto-generated method stub
////		return super.userDetailsServiceBean();
////	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!configure auth");
//		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
//	    authProvider.setUserDetailsService(username -> {
//			BatchUser u = userRepo.findByUsername(username);
//			UserDetails us = new User(username, u.getEncryptpwd(), AuthorityUtils.createAuthorityList("user", u.getRoles()));
//			return us;
//		});
//	    authProvider.setPasswordEncoder(BatchUser.encoder);
//	    
//		auth.authenticationProvider(authProvider);
//	}

	
}
