package cz.kappega.todo.server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;

//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
public class SecurityConfig {

//	@Bean
//	public CorsConfigurationSource corsConfigurationSource() {
//		CorsConfiguration configuration = new CorsConfiguration();
//		configuration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
//		configuration.setAllowedMethods(Arrays
//				.asList(GET.name(),
//						POST.name(),
//						PATCH.name(),
//						PUT.name(),
//						DELETE.name(),
//						OPTIONS.name()));
//		configuration.setAllowedHeaders(Arrays.asList(AUTHORIZATION, CACHE_CONTROL, CONTENT_TYPE));
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/api/**", configuration);
//
//		return source;
//	}
}
