# SR2EConsole

Namespace: SR2E

```csharp
public static class SR2EConsole
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/system.object) → [SR2EConsole](/docs/dev/api/sr2e/sr2econsole)

## Fields

### **cheatsEnabledOnSave**

```csharp
public static ScriptedBool cheatsEnabledOnSave;
```

## Properties

### **isOpen**

Check if console is open

```csharp
public static bool isOpen { get; }
```

#### Property Value

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

## Methods

### **SendMessage(String)**

Display a message in the console

```csharp
public static void SendMessage(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **SendMessage(String, Boolean, Boolean)**

Display a message in the console

```csharp
public static void SendMessage(string message, bool doMLLog, bool internal_logMLForSingleLine)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`doMLLog` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`internal_logMLForSingleLine` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendError(String)**

Display an error in the console

```csharp
public static void SendError(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **SendError(String, Boolean, Boolean)**

Display an error in the console

```csharp
public static void SendError(string message, bool doMLLog, bool internal_logMLForSingleLine)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`doMLLog` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`internal_logMLForSingleLine` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **SendWarning(String)**

Display an error in the console

```csharp
public static void SendWarning(string message)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

### **SendWarning(String, Boolean, Boolean)**

Display an error in the console

```csharp
public static void SendWarning(string message, bool doMLLog, bool internal_logMLForSingleLine)
```

#### Parameters

`message` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`doMLLog` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`internal_logMLForSingleLine` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **Close()**

Closes the console

```csharp
public static void Close()
```

### **Open()**

Opens the console

```csharp
public static void Open()
```

### **Toggle()**

Toggles the console

```csharp
public static void Toggle()
```

### **RegisterCommand(SR2ECommand)**

Registers a command to be used in the console

```csharp
public static bool RegisterCommand(SR2ECommand cmd)
```

#### Parameters

`cmd` [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **RegisterCommands(SR2ECommand[])**

Registers multiple commands to be used in the console

```csharp
public static bool RegisterCommands(SR2ECommand[] cmds)
```

#### Parameters

`cmds` [SR2ECommand[]](/docs/dev/api/sr2e/sr2ecommand)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **UnRegisterCommand(SR2ECommand)**

#### Caution

Use RegisterCommands(string) instead

---

Unregisters a command

```csharp
public static bool UnRegisterCommand(SR2ECommand cmd)
```

#### Parameters

`cmd` [SR2ECommand](/docs/dev/api/sr2e/sr2ecommand)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **UnRegisterCommand(String)**

Unregisters a command

```csharp
public static bool UnRegisterCommand(string cmd)
```

#### Parameters

`cmd` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

#### Returns

[Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExecuteByString(String, Boolean)**

```csharp
public static void ExecuteByString(string input, bool silent)
```

#### Parameters

`input` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`silent` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

### **ExecuteByString(String, Boolean, Boolean)**

Execute a string as if it was a commandId with args

```csharp
public static void ExecuteByString(string input, bool silent, bool alwaysPlay)
```

#### Parameters

`input` [String](https://docs.microsoft.com/en-us/dotnet/api/system.string)<br></br>

`silent` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>

`alwaysPlay` [Boolean](https://docs.microsoft.com/en-us/dotnet/api/system.boolean)<br></br>