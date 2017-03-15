package com.blogger.poc;

import com.blogger.poc.configuration.BloggerConfiguration;
import com.blogger.poc.configuration.BloggerSpringConfiguration;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.ws.rs.Path;
import java.util.EnumSet;

public class BloggerApplication extends Application<BloggerConfiguration> {

	@Override
	public void run(BloggerConfiguration configuration, Environment environment) throws Exception {
		AnnotationConfigWebApplicationContext ctx = initializeSpringContext(configuration, environment);
		enableCors(environment);
		registerResources(environment, ctx);
	}

	public static void main(String[] args) {
		try {
			new BloggerApplication().run(args);
		} catch (Exception e) {
			throw new RuntimeException("Blogger application failed!", e);
		}
	}

	private void registerResources(Environment environment, AnnotationConfigWebApplicationContext ctx) {
		environment.jersey().register(MultiPartFeature.class);

		for (String beanName: ctx.getBeanNamesForAnnotation(Path.class)) {
			environment.jersey().register(ctx.getBean(beanName));
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

	private AnnotationConfigWebApplicationContext initializeSpringContext(BloggerConfiguration configuration,
																		  Environment environment) {
		AnnotationConfigWebApplicationContext parent = new AnnotationConfigWebApplicationContext();
		parent.refresh();
		parent.getBeanFactory().registerSingleton("com/blogger/poc/wfeservices/configuration", configuration);
		parent.getBeanFactory().registerSingleton("dataSource", configuration.getDataSourceFactory().build(environment
				.metrics(), "dataSource"));
		parent.registerShutdownHook();
		parent.start();

		AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
		ctx.setParent(parent);
		ctx.register(BloggerSpringConfiguration.class);
		ctx.refresh();
		ctx.registerShutdownHook();
		ctx.start();

		environment.servlets().addServletListeners(new ContextLoaderListener(ctx));

		return ctx;
	}
}
