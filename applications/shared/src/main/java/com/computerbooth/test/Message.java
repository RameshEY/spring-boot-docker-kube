package com.computerbooth.test;

import java.io.Serializable;
import java.time.Instant;
import java.util.UUID;

public class Message implements Serializable {
    private static final long serialVersionUID = -4674375064607274784L;

    private UUID id;
    private Instant timestamp;
    private String message;

    protected Message() {
        id = UUID.randomUUID();
    }

    public Message(Instant timestamp, String message) {
        this.id = UUID.randomUUID();
        this.timestamp = timestamp;
        this.message = message;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public UUID getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Timestamp: " + getTimestamp() + ", ID: " + getId() + ", message: \"" + getMessage() + "\"";
    }
}
