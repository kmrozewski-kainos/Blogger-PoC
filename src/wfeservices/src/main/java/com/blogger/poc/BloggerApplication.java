package com.blogger.poc;

import com.blogger.poc.configuration.BloggerConfiguration;
import com.blogger.poc.configuration.HibernateBundle;
import com.blogger.poc.configuration.HibernateModule;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import ru.vyarus.dropwizard.guice.GuiceBundle;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class BloggerApplication extends Application<BloggerConfiguration> {

	@Override
	public void initialize(Bootstrap<BloggerConfiguration> bootstrap) {
		bootstrap
				.getObjectMapper()
				.registerModule(new JavaTimeModule())
				.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);

		final HibernateBundle hibernateBundle = new HibernateBundle("com.blogger.poc.persistence");
		bootstrap.addBundle(hibernateBundle);

		bootstrap.addBundle(GuiceBundle
				.<BloggerConfiguration>builder()
				.enableAutoConfig("com.blogger.poc")
				.searchCommands()
				.modules(new HibernateModule(hibernateBundle))
				.build());
	}

	@Override
	public void run(BloggerConfiguration configuration, Environment environment) throws Exception {
		enableCors(environment);
	}

	public static void main(String[] args) {
		try {
			new BloggerApplication().run(args);
		} catch (Exception e) {
			throw new RuntimeException("Blogger application failed!", e);
		}
	}

	private void enableCors(Environment environment) {
		final FilterRegistration.Dynamic cors =
				environment.servlets().addFilter("CORS", CrossOriginFilter.class);

		cors.setInitParameter("allowedOrigins", "*");
		cors.setInitParameter("allowedHeaders", "*");
		cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

		cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
	}
}
