package com.andrade.employee.service.implementation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.andrade.employee.domain.Employee;
import com.andrade.employee.repository.EmployeeRepository;
import com.andrade.employee.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAll() {
        return employeeRepository.findAll();

    }

}
