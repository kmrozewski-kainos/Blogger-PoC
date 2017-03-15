package domain;

import domain.enums.UserType;

import java.time.OffsetDateTime;

public class User {

	private Long id;
	private String name;
	private String displayName;
	private OffsetDateTime registered;
	private UserType type;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
