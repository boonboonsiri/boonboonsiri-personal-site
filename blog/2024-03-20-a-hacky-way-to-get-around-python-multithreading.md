---
authors: boonboonsiri
title: A hacky way to get around Python multithreading (and what you should actually do)
description: Exploring a python multithreading issue
slug: python-multithreading
tags: [project, engineering]
---

**Disclaimer:** I don't claim to be perfect at multithreading in any respect especially for Python multithreading and these thoughts really are my observations of how I got around Python's multithreading in an earlier project I made vs what I know now from concurrency courses and Python concurrency.

{/* truncate */}

## Python Multihreading

As you may or may not know, Python has a Global Interpreter Lock. From my understanding on how this lock works is that Python puts a lock on the entire program. For a thread to run the program

Now, I know that if I want to do multithreading I'm better off using languages such as Rust or Go, however let's assume you have to use Python as I did

## The Issue

## The Hacky Fix

## Learnings

