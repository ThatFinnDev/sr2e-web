# SR2ECommand

Namespace: SR2E

```csharp
public abstract class SR2ECommand
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand)

## Fields

### **silent**

```csharp
public bool silent;
```

## Properties

### **ID**

The ID of this command (Always lowercase)

```csharp
public abstract string ID { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **Usage**

The usage info of this command

```csharp
public abstract string Usage { get; }
```

#### Property Value

[String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

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

### **type**

The type of this command

```csharp
public CommandType type { get; }
```

#### Property Value

[CommandType](/docs/dev/api/sr2e/commandtype)<br></br>

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

## Methods

### **Execute(String[])**

Executes the command

```csharp
public abstract bool Execute(String[] args)
```

#### Parameters

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>
The arguments passed in the console (null if no arguments are provided)

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>
True if it executed, false otherwise

### **GetAutoComplete(Int32, String[])**

Gets the auto complete list (word filter is done by the system)

```csharp
public List<string> GetAutoComplete(int argIndex, String[] args)
```

#### Parameters

`argIndex` [Int32](https://docs.microsoft.com/en-us/dotnet/api/system.int32)<br></br>
The index of the argument in the command string

`args` [String[]](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>
A list of inputted arguments

#### Returns

[List&lt;String&gt;](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br></br>
The list of auto complete options

### **Update()**

Gets called every frame

```csharp
public void Update()
```

### **OnGameCoreLoad()**

Gets called when the scene GameCore loads

```csharp
public void OnGameCoreLoad()
```

### **OnUICoreLoad()**

Gets called when the scene UICore loads

```csharp
public void OnUICoreLoad()
```

### **OnPlayerCoreLoad()**

Gets called when the scene PlayerCore loads

```csharp
public void OnPlayerCoreLoad()
```

### **OnMainMenuUILoad()**

Gets called when the scene MainMenuUI loads

```csharp
public void OnMainMenuUILoad()
```

### **SendUsage()**

Sends the usage of the command to the in game console

```csharp
public bool SendUsage()
```

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendNoArguments()**

Sends the no arguments message

```csharp
public bool SendNoArguments()
```

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendLoadASaveFirst()**

Sends the load a save first message

```csharp
public bool SendLoadASaveFirst()
```

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendMessage(String)**

Display a message in the console

```csharp
public void SendMessage(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **SendError(String)**

Display an error in the console

```csharp
public bool SendError(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendWarning(String)**

Display an error in the console

```csharp
public void SendWarning(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>