Option Explicit
On Error Resume Next

Const _
    ForReading = 1, _ 
    ForWriting = 2, _ 
    ForAppending = 8
Dim objFSO, objTgtFile, objSrcFile, strAscii, strTgtFile, strSrcFile, strMsg

strSrcFile = WScript.Arguments.UnNamed(0)
strTgtFile = WScript.Arguments.UnNamed(1)
strAscii   = ""
strMsg     = ""

' Check command line arguments
If WScript.Arguments.UnNamed.Count <> 2 Then Syntax( )
If WScript.Arguments.Named.Count    > 0 Then Syntax( )

' Create File System Object and check if source and target files exist
Set objFSO = CreateObject( "Scripting.FileSystemObject" )
If Err Then ShowError( )
If objFSO.FileExists( strSrcFile ) = False Then
	strMsg = vbCrLf & "File not found: " & strSrcFile & vbCrLf
	Syntax( )
End If
If objFSO.FileExists( strTgtFile ) = True Then
	strMsg = vbCrLf & "File exists: " & strTgtFile & vbCrLf
	Syntax( )
End If

' Read ASCII file and store content in variable
Set objSrcFile = objFSO.OpenTextFile( strSrcFile, ForReading )
If Err Then ShowError( )
While Not objSrcFile.AtEndOfStream
	strAscii = strAscii & objSrcFile.ReadLine & vbCrLf
WEnd
objSrcFile.Close

' Create new Unicode text file
Set objTgtFile = objFSO.CreateTextFile( strTgtFile, True, True )
If Err Then ShowError( )
objTgtFile.Write strAscii
objTgtFile.Close

Sub ShowError()
	strMsg = vbCrLf & "Error # " & Err.Number & vbCrLf & _
	         Err.Description & vbCrLf & vbCrLf
	Syntax
End Sub

Sub Syntax( )
	strMsg = strMsg & vbCrLf _
	       & "ASCII2UC.vbs,  Version 1.00" & vbCrLf _
	       & "Convert text from ASCII to Unicode" _
	       & "Usage:  CSCRIPT  ASCII2UC.VBS  ascii_file  unicode_file" _
	       & "Where:  " & Chr(34) & "ascii_file" & Chr(34) _
	       & "   is the source text file, which must be in ASCII format" _
	       & "        " & Chr(34) & "unicode_file" & Chr(34) _
	       & " is the name of the target file, which will be in Unicode" _
	WScript.Echo strMsg
	WScript.Quit(1)
End Sub
