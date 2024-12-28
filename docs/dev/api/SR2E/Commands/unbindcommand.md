# UnbindCommand

Namespace: SR2E.Commands

```csharp
public class UnbindCommand : SR2E.SR2ECommand
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand) → [UnbindCommand](/docs/dev/api/sr2e/commands/unbindcommand)

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

### **UnbindCommand()**

```csharp
public UnbindCommand()
```

## Methods

### **GetAutoComplete(Int32, String[])**

```csharp
public List<string> GetAutoComplete(int argIndex, String[] args)
```

#### Parameters

`argIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br></br>

### **Execute(String[])**

```csharp
public bool Execute(String[] args)
```

#### Parameters

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>
