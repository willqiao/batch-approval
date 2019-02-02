package com.qiaos.batchapproval;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.qiaos.batchapproval.model.BatchUser;
import com.qiaos.batchapproval.rep.BatchUserRepository;

@Configuration
@EnableGlobalAuthentication
public class BatchApprovalSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private BatchUserRepository userRepo;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!configure http");
		http.authorizeRequests().antMatchers("/*").permitAll()
		.antMatchers("/repo/**").authenticated().and().formLogin().and().logout();
	}

//	@Override
//	public UserDetailsService userDetailsServiceBean() throws Exception {
//		// TODO Auto-generated method stub
//		return super.userDetailsServiceBean();
//	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!configure auth");
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
	    authProvider.setUserDetailsService(username -> {
			BatchUser u = userRepo.findByUsername(username);
			UserDetails us = new User(username, u.getEncryptpwd(), AuthorityUtils.createAuthorityList("user", u.getRoles()));
			return us;
		});
	    authProvider.setPasswordEncoder(BatchUser.encoder);
	    
		auth.authenticationProvider(authProvider);
	}

	
}
