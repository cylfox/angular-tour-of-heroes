import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message', () => {
    service.add('test message');
    expect(service.messages.length).toBe(1);
    expect(service.messages[0]).toBe('test message');
  });

  it('should clear all messages', () => {
    service.add('test message 1');
    service.add('test message 2');
    expect(service.messages.length).toBe(2);
    service.clear();
    expect(service.messages.length).toBe(0);
  });

});
