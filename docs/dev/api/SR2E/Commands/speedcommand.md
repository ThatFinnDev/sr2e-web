# SpeedCommand

Namespace: SR2E.Commands

```csharp
public class SpeedCommand : SR2E.SR2ECommand
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand) → [SpeedCommand](/docs/dev/api/sr2e/commands/speedcommand)

## Fields

### **silent**

```csharp
public bool silent;
```

## Properties

### **ID**

```csharp
public string ID { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Usage**

```csharp
public string Usage { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **type**

```csharp
public CommandType type { get; }
```

#### Property Value

[CommandType](/docs/dev/api/sr2e/commandtype)<br></br>

### **Description**

The description of this command

```csharp
public string Description { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **ExtendedDescription**

The full description of this command

```csharp
public string ExtendedDescription { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Hidden**

```csharp
public bool Hidden { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenConsole**

Allows the execution of the Command when the console is open

```csharp
public bool execWhenIsOpenConsole { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenCheatMenu**

Allows the execution of the Command when the cheat menu is open

```csharp
public bool execWhenIsOpenCheatMenu { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **execWhenIsOpenModMenu**

Allows the execution of the Command when the mod menu is open

```csharp
public bool execWhenIsOpenModMenu { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

## Constructors

### **SpeedCommand()**

```csharp
public SpeedCommand()
```

## Methods

### **RemoteExc(Single)**

```csharp
public static void RemoteExc(float val)
```

#### Parameters

`val` [Single](https://docs.microsoft.com/en-us/dotnet/api/system.single)<br></br>

### **Execute(String[])**

```csharp
public bool Execute(String[] args)
```

#### Parameters

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>