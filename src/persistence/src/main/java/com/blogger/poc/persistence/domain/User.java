package com.blogger.poc.persistence.domain;

import com.blogger.poc.persistence.domain.enums.UserType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.OffsetTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.OffsetDateTimeSerializer;

import java.time.OffsetDateTime;

public class User {

	@JsonProperty("name")
	private String name;

	@JsonProperty("displayName")
	private String displayName;

	@JsonProperty("registered")
	@JsonSerialize(using = OffsetDateTimeSerializer.class)
	@JsonDeserialize(using = OffsetTimeDeserializer.class)
	private OffsetDateTime registered;

	@JsonProperty("type")
	private UserType type;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public OffsetDateTime getRegistered() {
		return registered;
	}

	public void setRegistered(OffsetDateTime registered) {
		this.registered = registered;
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}
}
